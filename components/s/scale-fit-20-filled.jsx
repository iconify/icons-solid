import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.imcgk4b8n {
  fill: currentColor;
  d: path("M2 5.998v8.005a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.998a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m11.124 6.082a.5.5 0 0 1 .047-.706l.998-.873H11.5a.5.5 0 0 1 0-1h2.67l-1-.874a.5.5 0 0 1 .66-.753l2 1.75a.5.5 0 0 1 0 .753l-2 1.75a.5.5 0 0 1-.706-.047M6.876 7.92a.5.5 0 0 1-.047.706l-.998.874H8.5a.5.5 0 0 1 0 1H5.83l1 .873a.5.5 0 0 1-.66.753l-2-1.75a.5.5 0 0 1 0-.753l2-1.75a.5.5 0 0 1 .706.047");
}
</style><path class="imcgk4b8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:scale-fit-20-filled"} {...others} />);
}

export default Component;
