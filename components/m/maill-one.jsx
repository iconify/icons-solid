import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m2blynbna.css';
import '../../css/o/o2ir8p9au.css';
import '../../css/k/k4pywfg3u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGr4wA8dyJ"><g class="s9cl3zbei"><path class="m2blynbna"/><path class="o2ir8p9au"/><path class="k4pywfg3u"/></g></mask></defs><path mask="url(#SVGr4wA8dyJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:maill-one"} {...others} />);
}

export default Component;
