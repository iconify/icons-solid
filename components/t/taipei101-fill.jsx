import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh0qq1b_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vh0qq1b_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:taipei101-fill"} {...others} />);
}

export default Component;
