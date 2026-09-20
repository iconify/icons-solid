import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbm1k2boy.css';
import '../../css/y/yuhrwdbjr.css';
import '../../css/z/zwtkigb0t.css';
import '../../css/l/l3bykrbye.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qbm1k2boy"/><path class="yuhrwdbjr"/><path class="zwtkigb0t"/><path class="l3bykrbye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-open-light"} {...others} />);
}

export default Component;
