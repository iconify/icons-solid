import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkid2hbfq.css';
import '../../css/f/fqaz6r90g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pkid2hbfq"/><path class="fqaz6r90g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:copy-alt-fill"} {...others} />);
}

export default Component;
