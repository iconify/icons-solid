import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bz5d1vs2b {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1.75q-.149 0-.287.057t-.243.163Q4.25 9.189 4.25 14q0 3.21 2.27 5.48T12 21.75t5.48-2.27T19.75 14q0-4.811-7.22-12.03q-.105-.106-.243-.163T12 1.75m-2 10q0-2 2-2t2 2t-2 2t-2-2m-.5 2.75q2 0 2 2t-2 2t-2-2t2-2m3 2q0-2 2-2t2 2t-2 2t-2-2");
}
</style><path class="bz5d1vs2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:water-hardness"} {...others} />);
}

export default Component;
