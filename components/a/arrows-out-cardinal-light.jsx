import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.oyjq4lbis {
  fill: currentColor;
  d: path("M91.76 60.24a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L134 38.49V96a6 6 0 0 1-12 0V38.49l-21.76 21.75a6 6 0 0 1-8.48 0m64 135.52L134 217.51V160a6 6 0 0 0-12 0v57.51l-21.76-21.75a6 6 0 0 0-8.48 8.48l32 32a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48m80.48-72l-32-32a6 6 0 0 0-8.48 8.48L217.51 122H160a6 6 0 0 0 0 12h57.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48M38.49 134H96a6 6 0 0 0 0-12H38.49l21.75-21.76a6 6 0 0 0-8.48-8.48l-32 32a6 6 0 0 0 0 8.48l32 32a6 6 0 0 0 8.48-8.48Z");
}
</style><path class="oyjq4lbis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-out-cardinal-light"} {...others} />);
}

export default Component;
