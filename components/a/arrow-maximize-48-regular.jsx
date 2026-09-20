import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jqbcfhb3f {
  fill: currentColor;
  d: path("M38.75 8c.69 0 1.25.56 1.25 1.25v15.5a1.25 1.25 0 1 1-2.5 0V12.268L12.268 37.5H24.75a1.25 1.25 0 1 1 0 2.5H9.25C8.56 40 8 39.44 8 38.75v-15.5a1.25 1.25 0 1 1 2.5 0v12.482L35.732 10.5H23.25a1.25 1.25 0 1 1 0-2.5z");
}
</style><path class="jqbcfhb3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-maximize-48-regular"} {...others} />);
}

export default Component;
