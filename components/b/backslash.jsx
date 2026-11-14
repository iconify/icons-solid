import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mv6inubfx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m7.646 3.12l10 17q.038.063.062.133q.025.07.035.143t.006.147t-.023.145t-.051.138t-.076.126q-.045.059-.1.108t-.119.086q-.063.038-.133.062q-.07.025-.143.035t-.147.006t-.145-.023t-.138-.051t-.126-.076q-.059-.045-.108-.1t-.086-.119l-10-17q-.076-.128-.097-.276q-.02-.148.017-.292q.037-.145.127-.264t.219-.194q.063-.038.133-.062q.07-.025.143-.035t.147-.006t.145.023q.072.019.138.051t.126.076q.059.045.108.1t.086.119");
}
</style><path class="mv6inubfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:backslash"} {...others} />);
}

export default Component;
