import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/bkk-iov7u.css';
import '../../css/c/crcwzxbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="bkk-iov7u"/><path class="crcwzxbsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:compass-2"} {...others} />);
}

export default Component;
