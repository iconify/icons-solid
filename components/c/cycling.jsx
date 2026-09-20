import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgv9xlbmv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rgv9xlbmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cycling"} {...others} />);
}

export default Component;
