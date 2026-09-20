import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n7u4o-vzj.css';
import '../../css/l/lqjiyubml.css';
import '../../css/o/o-fe66dks.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="n7u4o-vzj"/><path class="lqjiyubml"/><path class="o-fe66dks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:laundry-hand-wash"} {...others} />);
}

export default Component;
