import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/izwxg58wt.css';
import '../../css/e/exa3jlbqw.css';
import '../../css/d/de59gb_vo.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="izwxg58wt"/><path class="exa3jlbqw"/><path class="de59gb_vo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:job-profile-search"} {...others} />);
}

export default Component;
