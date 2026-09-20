import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d25b_nquv {
  fill: currentColor;
  d: path("M4 16h4v-2H6V8H4zm5.5 0h2v-6H13V8H8v2h1.5zm4.5 0h4v-2h-2v-1h1.5v-2H16v-1h2V8h-4zM1 21V3h22v8.25h-1.25V10h-1.5v1.25H19v1.5h1.25V14h1.5v-1.25H23V21z");
}
</style><path class="d25b_nquv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:lte-plus-mobiledata-badge-sharp"} {...others} />);
}

export default Component;
