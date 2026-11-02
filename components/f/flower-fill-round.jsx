import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gqgebmbjw {
  fill: currentColor;
  d: path("M8.101 5.101a4 4 0 0 1 7.798 0a4 4 0 0 1 0 7.798A4.02 4.02 0 0 1 13 15.874V21a1 1 0 0 1-2 0v-5.126a4.02 4.02 0 0 1-2.899-2.975a4 4 0 0 1 0-7.798M12 8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="gqgebmbjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flower-fill-round"} {...others} />);
}

export default Component;
