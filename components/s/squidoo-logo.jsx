import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/c/cp5d3wstg.css';
import '../../css/v/vj-qa_bhw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="cp5d3wstg"/><path class="vj-qa_bhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:squidoo-logo"} {...others} />);
}

export default Component;
