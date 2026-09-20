import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6k6h2o9k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b6k6h2o9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:gameandwatch"} {...others} />);
}

export default Component;
