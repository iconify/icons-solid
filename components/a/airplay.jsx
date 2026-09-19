import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3squ__1t.css';
import '../../css/h/h8f75q1qw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer w3squ__1t"/><path class="duoicon-secondary-layer h8f75q1qw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:airplay"} {...others} />);
}

export default Component;
