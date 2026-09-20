import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw8y06qco.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lw8y06qco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-summarize-alt-fill"} {...others} />);
}

export default Component;
