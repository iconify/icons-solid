import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vn7gdow4g {
  fill: currentColor;
  d: path("M10.799 20.691q-.51-.462-.607-1.152h3.616q-.096.69-.607 1.152T12 21.154t-1.201-.463m5.805-6.63L7.427 4.859q.987-.912 2.116-1.385T12 3q2.721 0 4.61 1.89T18.5 9.5q0 1.506-.538 2.605t-1.358 1.956m3.558 6.37l-.714.713L13.304 15H8.558q-1.417-.929-2.238-2.356T5.5 9.5q0-.52.091-1.08q.092-.562.236-.897l-3.158-3.17l.708-.707zm-4.627-3.662v1H8.5v-1z");
}
</style><path class="vn7gdow4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:light-off-sharp"} {...others} />);
}

export default Component;
