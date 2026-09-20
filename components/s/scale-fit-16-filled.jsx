import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.rgw6jvbjl {
  fill: currentColor;
  d: path("M2 4.998v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m7.65 4.86a.5.5 0 0 1 0-.707l.65-.65H8.752a.5.5 0 0 1 0-1h1.542l-.643-.643a.5.5 0 1 1 .707-.707l1.5 1.5a.5.5 0 0 1 0 .707l-1.5 1.5a.5.5 0 0 1-.707 0M6.352 6.151a.5.5 0 0 1 0 .707L5.71 7.5h1.54a.5.5 0 1 1 0 1H5.7l.652.651a.5.5 0 1 1-.707.707l-1.5-1.5a.5.5 0 0 1 0-.707l1.5-1.5a.5.5 0 0 1 .707 0");
}
</style><path class="rgw6jvbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:scale-fit-16-filled"} {...others} />);
}

export default Component;
