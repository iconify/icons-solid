import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dftf9rvck.css';
import '../../css/a/a11bti4rf.css';
import '../../css/s/stjv0pdcv.css';
import '../../css/p/pmr9h6bii.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="dftf9rvck"/><circle class="a11bti4rf"/><circle class="stjv0pdcv"/><path class="pmr9h6bii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:message-circle-outline"} {...others} />);
}

export default Component;
