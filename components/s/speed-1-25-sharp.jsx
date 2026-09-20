import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.brkrrubld {
  fill: currentColor;
  d: path("M7.039 16.5v-1h1v1zm9.461 0v-1h4v-3h-4v-5h5v1h-4v3h4v5zm-6.73 0v-5h4v-3h-4v-1h5v5h-4v3h4v1zm-5.462 0v-8H2.5v-1h2.808v9z");
}
</style><path class="brkrrubld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:speed-1-25-sharp"} {...others} />);
}

export default Component;
