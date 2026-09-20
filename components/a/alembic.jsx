import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzj3-4b9t.css';
import '../../css/u/up_tdpb1s.css';
import '../../css/y/ypnppfnak.css';
import '../../css/f/fulcbk8lu.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/mrug4c8zp.css';
import '../../css/t/tkrbvp87l.css';

const viewBox = {"width":72,"height":72};
const content = `<ellipse class="dzj3-4b9t"/><path class="up_tdpb1s"/><path class="ypnppfnak"/><path class="fulcbk8lu"/><g class="jn8qy4bru"><path class="mrug4c8zp"/><path class="tkrbvp87l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:alembic"} {...others} />);
}

export default Component;
