import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tj6aivbzl.css';
import '../../css/u/uyqxwgbgq.css';
import '../../css/w/wq8panzid.css';
import '../../css/o/o1xiohgss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><ellipse class="tj6aivbzl"/><path class="uyqxwgbgq"/><path class="wq8panzid"/><path class="o1xiohgss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:database-backup"} {...others} />);
}

export default Component;
