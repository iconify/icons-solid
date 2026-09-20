import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zjek9wked.css';
import '../../css/y/ygusiebsw.css';
import '../../css/w/wp8dfrk9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="zjek9wked"/><path class="ygusiebsw"/><path class="wp8dfrk9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:discourse-logo"} {...others} />);
}

export default Component;
