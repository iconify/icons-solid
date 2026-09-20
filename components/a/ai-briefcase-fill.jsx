import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujvt1kxzr.css';
import '../../css/o/oz51gzb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ujvt1kxzr"/><path clip-rule="evenodd" class="oz51gzb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-briefcase-fill"} {...others} />);
}

export default Component;
