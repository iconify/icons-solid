import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ytnx4gb2o.css';
import '../../css/c/ctowedb1g.css';
import '../../css/q/qp8t70b3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ytnx4gb2o"/><path class="ctowedb1g"/><path class="qp8t70b3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:feather"} {...others} />);
}

export default Component;
