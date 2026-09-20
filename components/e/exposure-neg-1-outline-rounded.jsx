import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w3_lhticb {
  fill: currentColor;
  d: path("M9 13.385H4q-.213 0-.356-.144q-.144-.144-.144-.357t.144-.356t.356-.144h5q.213 0 .356.145t.144.356t-.144.356t-.356.144m7.327-5.912l-2.118 1.468q-.176.12-.383.09t-.325-.215q-.107-.174-.08-.375q.027-.2.204-.316l2.863-2.013q.062-.037.107-.055t.109-.019h.277q.177 0 .29.112q.114.111.114.284v10.999q0 .223-.154.376q-.153.152-.377.152t-.375-.152t-.152-.376z");
}
</style><path class="w3_lhticb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:exposure-neg-1-outline-rounded"} {...others} />);
}

export default Component;
