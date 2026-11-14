import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zooi8zbif {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 7.75q-3 0-3-3t3-3t3 3t-3 3M12 9q-5.123 0-5.247 6.189q-4.003.844-4.003 3.311q0 2.75 3.25 2.75h12q3.25 0 3.25-2.75q0-2.467-4.003-3.311Q17.123 9 12 9m0 5.75q-2.109 0-3.738.195Q8.464 10.5 12 10.5t3.738 4.445Q14.109 14.75 12 14.75");
}
</style><path class="zooi8zbif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:meditation"} {...others} />);
}

export default Component;
