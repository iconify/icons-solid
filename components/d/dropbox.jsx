import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6ffl6b-d.css';
import '../../css/c/czuc2kb0l.css';
import '../../css/b/bphnj6bkw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b6ffl6b-d"/><path clip-rule="evenodd" class="czuc2kb0l"/><path clip-rule="evenodd" class="bphnj6bkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:dropbox"} {...others} />);
}

export default Component;
