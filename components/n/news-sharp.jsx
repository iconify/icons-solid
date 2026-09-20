import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fynhpk7ir {
  fill: currentColor;
  d: path("M4 20V4h11.577L20 8.423V20zM15 5v4h4zM7.5 16h9v-1h-9zm0-7H12V8H7.5zm0 3.5h9v-1h-9z");
}
</style><path class="fynhpk7ir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:news-sharp"} {...others} />);
}

export default Component;
