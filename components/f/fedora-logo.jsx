import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/f/f6trtljmw.css';
import '../../css/b/bqjvqdb9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="f6trtljmw"/><path class="bqjvqdb9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:fedora-logo"} {...others} />);
}

export default Component;
