import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nvhm7jbrv {
  fill: currentColor;
  d: path("M4.616 3h14.769q.69 0 1.152.463T21 4.615v9.77q0 .69-.463 1.152T19.385 16h-4.462v4.27L12 18.807l-2.923 1.461V16H4.616q-.691 0-1.153-.462T3 14.385v-9.77q0-.69.463-1.153T4.615 3M4 12.577h16v-2.154H4z");
}
</style><path class="nvhm7jbrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:card-membership"} {...others} />);
}

export default Component;
