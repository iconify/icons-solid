import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohaph-qba.css';
import '../../css/e/ei2v5obqp.css';
import '../../css/g/ga3gonclv.css';
import '../../css/q/qt0xvpbkp.css';
import '../../css/z/z-6zrgbnl.css';
import '../../css/j/jp7unqb4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ohaph-qba"/><path class="ei2v5obqp"/><path class="ga3gonclv"/><path class="qt0xvpbkp"/><path class="z-6zrgbnl"/><path class="jp7unqb4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:layout-3"} {...others} />);
}

export default Component;
