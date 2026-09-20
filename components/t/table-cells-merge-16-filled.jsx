import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.kiew8t6so {
  fill: currentColor;
  d: path("M4.5 2a2.5 2.5 0 0 0-2.45 2h11.9a2.5 2.5 0 0 0-2.45-2zM2 11V5h12v6zm4.354-4.854a.5.5 0 0 0-.708 0l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708L5.707 8.5h4.586l-.647.646a.5.5 0 1 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 0 0-.708.708l.647.646H5.707l.647-.646a.5.5 0 0 0 0-.708M13.95 12a2.5 2.5 0 0 1-2.45 2h-7a2.5 2.5 0 0 1-2.45-2z");
}
</style><path class="kiew8t6so"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-cells-merge-16-filled"} {...others} />);
}

export default Component;
