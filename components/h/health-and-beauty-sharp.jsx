import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o5rhsgb1k {
  fill: currentColor;
  d: path("M16.039 21v-1h4v-2.77h-4v-1h4v-2.768h-4v-1h4v-2.77h-4v-1h4V5.923h-4v-1h5.769V21zM5.653 21l-3.462-9.577l4.77-2.846V3h2v5.577l4.769 2.846L10.269 21z");
}
</style><path class="o5rhsgb1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:health-and-beauty-sharp"} {...others} />);
}

export default Component;
