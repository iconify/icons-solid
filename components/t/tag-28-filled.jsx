import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.dsfv85boa {
  fill: currentColor;
  d: path("M12.987 3.952A3.25 3.25 0 0 1 15.285 3h6.965A2.75 2.75 0 0 1 25 5.75v6.964a3.25 3.25 0 0 1-.952 2.299l-9.25 9.25a3.25 3.25 0 0 1-4.597 0l-6.464-6.465a3.25 3.25 0 0 1 0-4.596zM19.5 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3");
}
</style><path class="dsfv85boa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:tag-28-filled"} {...others} />);
}

export default Component;
