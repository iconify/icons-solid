import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lrtm9pb0j {
  fill: currentColor;
  d: path("M12 8V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m-5.5.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-.5v2.69l1.56 1.56h2.69v-.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-.5h-2.69l-1.78 1.78a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 0-1.06l1.78-1.78V11.5h-.5a.75.75 0 0 1-.75-.75zm7-.25V2.5l6 6H14a.5.5 0 0 1-.5-.5");
}
</style><path class="lrtm9pb0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-flowchart-24-filled"} {...others} />);
}

export default Component;
