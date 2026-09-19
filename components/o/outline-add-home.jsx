import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4tj93cqy {
  fill: currentColor;
  d: path("M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21z");
}

.ksbzsnyie {
  fill: currentColor;
  d: path("m12 5.5l6 4.5v1c.7 0 1.37.1 2 .29V9l-8-6l-8 6v12h7.68c-.3-.62-.5-1.29-.6-2H6v-9z");
}
</style><path class="ksbzsnyie"/><path class="a4tj93cqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-add-home"} {...others} />);
}

export default Component;
