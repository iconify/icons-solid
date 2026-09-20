import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.bgafd6b8t {
  fill: currentColor;
  d: path("M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h8.843a4.5 4.5 0 0 0 3.182-1.318l8.157-8.157A4.5 4.5 0 0 0 29 16.343V7.5A4.5 4.5 0 0 0 24.5 3zM4 7.5A3.5 3.5 0 0 1 7.5 4h17A3.5 3.5 0 0 1 28 7.5v8.843q0 .334-.062.657H21.5a4.5 4.5 0 0 0-4.5 4.5v6.438a3.5 3.5 0 0 1-.657.062H7.5A3.5 3.5 0 0 1 4 24.5zm14 20.083V21.5a3.5 3.5 0 0 1 3.5-3.5h6.083a3.5 3.5 0 0 1-.608.818l-8.157 8.157a3.5 3.5 0 0 1-.818.608");
}
</style><path class="bgafd6b8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:note-32-light"} {...others} />);
}

export default Component;
