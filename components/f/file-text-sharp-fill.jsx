import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt9tg9b2o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xt9tg9b2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:file-text-sharp-fill"} {...others} />);
}

export default Component;
