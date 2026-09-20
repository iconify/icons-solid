import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xlog5cdry {
  fill: currentColor;
  d: path("M21.502 4.313a4.25 4.25 0 0 1 5 0l15.75 11.456a4.25 4.25 0 0 1 1.543 4.75l-6.018 18.54a4.25 4.25 0 0 1-4.042 2.938H14.268a4.25 4.25 0 0 1-4.042-2.938l-6.018-18.54a4.25 4.25 0 0 1 1.542-4.75zm3.529 2.022a1.75 1.75 0 0 0-2.059 0L7.221 17.79a1.75 1.75 0 0 0-.635 1.955l6.017 18.54a1.75 1.75 0 0 0 1.665 1.21h19.467a1.75 1.75 0 0 0 1.664-1.21l6.018-18.54a1.75 1.75 0 0 0-.635-1.955z");
}
</style><path class="xlog5cdry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:pentagon-48-regular"} {...others} />);
}

export default Component;
