import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.hb-ugplvh {
  d: path("M16 4.326a11.576 11.637 0 0 0-11.576 11.64A11.576 11.637 0 0 0 16 27.601a11.576 11.637 0 0 0 11.576-11.637A11.576 11.637 0 0 0 16 4.326m.035 2.797A8.831 8.878 0 0 1 24.867 16a8.831 8.878 0 0 1-8.832 8.879A8.831 8.878 0 0 1 7.205 16a8.831 8.878 0 0 1 8.83-8.877");
}

.mggktgcny {
  d: path("M11.012 2.002h2.9V30h-2.9z");
}
</style><path class="mggktgcny"/><path class="hb-ugplvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-light-spin"} {...others} />);
}

export default Component;
