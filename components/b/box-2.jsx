import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k50q2o0qw.css';
import '../../css/v/vbawtkbgj.css';
import '../../css/b/bv_94_gsh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer k50q2o0qw"/><path class="duoicon-primary-layer vbawtkbgj"/><path class="bv_94_gsh duoicon-secondary-layer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:box-2"} {...others} />);
}

export default Component;
