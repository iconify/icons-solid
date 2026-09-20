import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.nzlw7hbeb {
  fill: currentColor;
  d: path("M24.75 2A3.25 3.25 0 0 1 28 5.25v21.5A3.25 3.25 0 0 1 24.75 30H7.25a3.25 3.25 0 0 1-3.246-3.083L4 26.75V5.25A3.25 3.25 0 0 1 7.25 2zM7.25 4C6.56 4 6 4.56 6 5.25v21.5l.007.128A1.25 1.25 0 0 0 7.25 28h17.5c.69 0 1.25-.56 1.25-1.25V5.25C26 4.56 25.44 4 24.75 4zM21.5 21a2 2 0 1 1 0 4h-11a2 2 0 1 1 0-4zm0-14a2 2 0 1 1 0 4h-11a2 2 0 1 1 0-4z");
}
</style><path class="nzlw7hbeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-header-footer-32-regular"} {...others} />);
}

export default Component;
