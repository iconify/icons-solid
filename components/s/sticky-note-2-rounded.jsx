import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vfzgipfhb {
  fill: currentColor;
  d: path("m14 19l5-5h-4.192q-.344 0-.576.232t-.232.576zm-8.385 1q-.666 0-1.14-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h12.77q.666 0 1.14.475T20 5.615v8.002q0 .332-.13.632t-.349.518l-4.754 4.754q-.217.218-.517.348t-.633.131zm2.77-6.539H11.5q.213 0 .356-.143q.144-.144.144-.357t-.144-.356t-.356-.143H8.385q-.213 0-.357.144t-.143.356t.143.356t.357.144m0-3.962h7.23q.213 0 .357-.144t.144-.357t-.144-.356t-.356-.143H8.385q-.213 0-.357.144t-.143.357t.143.356t.357.143");
}
</style><path class="vfzgipfhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sticky-note-2-rounded"} {...others} />);
}

export default Component;
