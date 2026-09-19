import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bkzc8qb3g {
  fill: currentColor;
  d: path("M22 6H12l-2-2H2v16h20zm-2 12H4V8h16z");
}
</style><path class="bkzc8qb3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-folder-open"} {...others} />);
}

export default Component;
