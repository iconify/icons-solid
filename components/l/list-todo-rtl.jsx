import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hs_nvxbpj.css';
import '../../css/f/ffhll8bfm.css';
import '../../css/y/yxph1hbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hs_nvxbpj"/><rect transform="matrix(0 -1 -1 0 21.38 18.04)" class="ffhll8bfm"/><rect transform="matrix(0 -1 -1 0 21.38 18.04)" class="yxph1hbqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:list-todo-rtl"} {...others} />);
}

export default Component;
