import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m390b8qby.css';
import '../../css/a/a6jo9qb1m.css';
import '../../css/n/ndq0ugbyy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="m390b8qby"/><path class="a6jo9qb1m"/><path class="ndq0ugbyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-add-broken"} {...others} />);
}

export default Component;
