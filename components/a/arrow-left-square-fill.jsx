import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sg2ok617q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sg2ok617q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:arrow-left-square-fill"} {...others} />);
}

export default Component;
