import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/o/om85ohb3a.css';
import '../../css/t/t-9ql_bfd.css';
import '../../css/z/zt9nl6b7u.css';
import '../../css/b/bfkrlh4rj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="om85ohb3a"/><path class="t-9ql_bfd"/><path class="zt9nl6b7u"/><path class="bfkrlh4rj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:picture-2"} {...others} />);
}

export default Component;
