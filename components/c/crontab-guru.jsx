import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftit3v5he.css';
import '../../css/f/ffalivcqe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ftit3v5he"/><circle class="ffalivcqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:crontab-guru"} {...others} />);
}

export default Component;
