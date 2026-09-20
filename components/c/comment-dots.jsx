import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dftf9rvck.css';
import '../../css/y/yin69t93p.css';
import '../../css/s/stjv0pdcv.css';
import '../../css/a/a11bti4rf.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="dftf9rvck"/><path class="yin69t93p"/><circle class="stjv0pdcv"/><circle class="a11bti4rf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:comment-dots"} {...others} />);
}

export default Component;
