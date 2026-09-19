import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck-1flr4c.css';
import '../../css/b/buc-_ybgy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ck-1flr4c"/><circle class="buc-_ybgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:file-find"} {...others} />);
}

export default Component;
